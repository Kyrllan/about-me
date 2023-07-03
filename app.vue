<template>
  <v-app theme="customLightTheme" id="root">
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="4" class="main-column pl-6 pr-16">
        <div class="py-8 d-flex justify-center">
          <img
            src="@/assets/kns.png"
            alt="kns-image"
            style="border-radius: 50%; max-width: 400px; min-width: 200px;"
          />
        </div>
        <div class="d-flex align-center flex-column text-white">
          <h2>Kyrllan Nogueira de Souza</h2>
          <h3>Front End Engineer</h3>
        </div>
        <v-container class="pt-10">
          <custom-section :title="language.professionalSkills.title">
            <template v-slot:content>
              <custom-skills
                class="pt-2"
                v-for="(skill, i) in language.professionalSkills.skills"
                :key="i"
                :title="skill.name"
                :value="skill.value"
              ></custom-skills>
            </template>
          </custom-section>
          <custom-section class="pt-6" :title="language.personalSkills.title">
            <template v-slot:content>
              <custom-skills
                class="pt-2"
                v-for="(skill, i) in language.personalSkills.skills"
                :key="i"
                :title="skill.name"
                :value="skill.value"
              ></custom-skills>
            </template>
          </custom-section>
          <custom-section class="pt-6" :title="language.contact.title">
            <template v-slot:content>
              <custom-contact
                class="pt-2"
                v-for="(contact, i) in language.contact.contacts"
                :key="i"
                :icon="contact.icon"
                :title="contact.name"
                :value="contact.value"
              ></custom-contact>
            </template>
          </custom-section>
        </v-container>
      </v-col>
      <v-col cols="12" sm="12" md="8" class="second-column">
        <v-container class="px-10">
          <custom-section :title="language.about.title">
            <template v-slot:content>
              <div class="pt-2 content">
                {{ language.about.content }}
              </div>
            </template>
          </custom-section>
          <custom-section class="pt-8" :title="language.education.title">
            <template v-slot:content>
              <date-section
                class="pt-4"
                v-for="(education, i) in language.education.qualifications"
                :key="i"
                :date="education.period"
                :title="education.title"
                :content="education.content"
              ></date-section>
            </template>
          </custom-section>
          <custom-section class="pt-8" :title="language.workExperience.title">
            <template v-slot:content>
              <date-section
                class="pt-4"
                v-for="(experienses, i) in language.workExperience.experiences"
                :key="i"
                :date="experienses.period"
                :title="experienses.title"
                :content="experienses.content"
              ></date-section>
            </template>
          </custom-section>
        </v-container>
      </v-col>
    </v-row>
    <v-menu transition="slide-x-transition" location="end">
      <template v-slot:activator="{props}">
        <v-btn
          class="config-btn"
          icon="mdi-cog"
          color="primary"
          v-bind="props"
        ></v-btn>
      </template>
      <div class="d-flex align-center">
        <v-tooltip
          location="bottom"
          text="Alterar lingua"
          v-if="localeBtn !== 'pt-BR'"
        >
          <template v-slot:activator="{props}">
            <v-btn
              v-bind="props"
              class="ml-2"
              icon
              size="x-small"
              @click="changeLanguage('pt-BR')"
            >
              <img
                src="@/assets/br-flag.png"
                style="width: 32px; height: 32px"
                alt="br-flag"
              />
            </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip location="bottom" text="Change language" v-else>
          <template v-slot:activator="{props}">
            <v-btn
              v-bind="props"
              class="ml-2"
              icon
              size="x-small"
              @click="changeLanguage('en-US')"
            >
              <img
                src="@/assets/usa-flag.png"
                style="width: 32px; height: 32px"
                alt="usa-flag"
              />
            </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip text="Download pdf">
          <template v-slot:activator="{props}">
            <v-btn
              v-bind="props"
              class="ml-2"
              size="x-small"
              icon="mdi-file-download"
              color="green"
              @click="downloadPDF"
            ></v-btn>
          </template>
        </v-tooltip>
      </div>
    </v-menu>
  </v-app>
</template>

<script>
import {locale} from '@/locale/locale';

export default {
  setup() {
    const {$html2pdf} = useNuxtApp();

    let localeBtn = 'pt-BR';
    let language = ref(locale['pt-BR']);

    function changeLanguage(value) {
      this.localeBtn = value;
      this.language = locale[value];
    }

    function downloadPDF() {
      if (document) {
        const element = document.getElementById('root');

        // clone the element: https://stackoverflow.com/questions/60557116/html2pdf-wont-print-hidden-div-after-unhiding-it/60558415#60558415
        const clonedElement = element.cloneNode(true);
        clonedElement.classList.remove('hidden');
        clonedElement.classList.add('block');
        // need to append to the document, otherwise the downloading doesn't start
        document.body.appendChild(clonedElement);

        // https://www.npmjs.com/package/html2pdf.js/v/0.9.0#options
        $html2pdf(clonedElement, {
          filename: 'currículo.pdf',
          image: {type: 'jpeg'},
          enableLinks: true,
        });
        clonedElement.remove();
      }
    }

    return {
      language,
      localeBtn,
      changeLanguage,
      downloadPDF,
    };
  },
};
</script>

<style>
body {
  font-family: 'Poppins';
}

.config-btn {
  position: fixed;
  top: 16px;
  left: 16px;
}

.content {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  color: rgb(var(--v-theme-secondary));
}

.main-column {
  clip-path: polygon(
    0 0,
    100% 0,
    100% 25%,
    95% 30%,
    95% 100%,
    88% 75%,
    100% 88%,
    100% 100%,
    0 100%,
    0 100%
  );
  background-color: rgb(var(--v-theme-secondary));
}
</style>
