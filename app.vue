<template>
  <v-app theme="customLightTheme" id="root">
    <div class="container">
      <div class="first-column">
        <!-- <v-tooltip text="Download pdf">
          <template v-slot:activator="{props}">
            <v-btn
              v-bind="props"
              class="ml-16"
              size="x-small"
              icon="mdi-file-download"
              color="green"
              @click="downloadPDF"
            ></v-btn>
          </template>
        </v-tooltip> -->
        <div class="locale-btn">
          <div v-if="localeBtn == 'en-US'">
            <v-tooltip location="bottom" text="Alterar lingua">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  icon
                  size="x-small"
                  @click="changeLanguage('pt-BR')"
                >
                  <img
                    src="@/assets/usa-flag.png"
                    style="width: 32px; height: 32px"
                    alt="usa-flag"
                  />
                </v-btn>
              </template>
            </v-tooltip>
          </div>
          <div v-if="localeBtn == 'pt-BR'">
            <v-tooltip location="bottom" text="Change language">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  icon
                  size="x-small"
                  @click="changeLanguage('en-US')"
                >
                  <img
                    src="@/assets/br-flag.png"
                    style="width: 32px; height: 32px"
                    alt="usa-flag"
                  />
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </div>

        <div class="py-6 d-flex justify-center">
          <img
            src="@/assets/kns.png"
            alt="kns-image"
            style="border-radius: 50%; max-width: 350px; min-width: 200px"
          />
        </div>
        <div class="d-flex align-center flex-column text-white">
          <h2 style="text-align: center">Kyrllan Nogueira de Souza</h2>
          <h3>Front End Engineer</h3>
        </div>
        <v-container class="pt-14">
          <custom-section :title="language.professionalSkills.title">
            <template v-slot:content>
              <custom-skills
                class="pt-3"
                v-for="(skill, i) in language.professionalSkills.skills"
                :key="i"
                :title="skill.name"
                :value="skill.value"
              ></custom-skills>
            </template>
          </custom-section>
          <custom-section class="pt-10" :title="language.personalSkills.title">
            <template v-slot:content>
              <custom-skills
                class="pt-3"
                v-for="(skill, i) in language.personalSkills.skills"
                :key="i"
                :title="skill.name"
                :value="skill.value"
              ></custom-skills>
            </template>
          </custom-section>
          <custom-section class="pt-10" :title="language.contact.title">
            <template v-slot:content>
              <custom-contact
                class="pt-3"
                v-for="(contact, i) in language.contact.contacts"
                :key="i"
                :icon="contact.icon"
                :title="contact.name"
                :value="contact.value"
              ></custom-contact>
            </template>
          </custom-section>
        </v-container>
      </div>
      <div class="second-column">
        <v-container class="px-10">
          <custom-section :title="language.about.title">
            <template v-slot:content>
              <div class="pt-2 content" v-html="language.about.content"></div>
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
                :links="experienses.links"
              ></date-section>
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
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script>
import { locale } from "@/locale/locale";

export default {
  setup() {
    const { $html2pdf } = useNuxtApp();

    let localeBtn = ref("pt-BR");
    let language = ref(locale["pt-BR"]);

    function changeLanguage(value) {
      this.localeBtn = value;
      this.language = locale[value];
    }

    function downloadPDF() {
      if (document) {
        const element = document.getElementById("root");

        // clone the element: https://stackoverflow.com/questions/60557116/html2pdf-wont-print-hidden-div-after-unhiding-it/60558415#60558415
        const clonedElement = element.cloneNode(true);
        clonedElement.classList.remove("hidden");
        clonedElement.classList.add("block");
        // need to append to the document, otherwise the downloading doesn't start
        document.body.appendChild(clonedElement);

        // https://www.npmjs.com/package/html2pdf.js/v/0.9.0#options
        $html2pdf(clonedElement, {
          filename: "currículo.pdf",
          image: { type: "jpeg" },
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
  font-family: "Poppins";
}

.locale-btn {
  position: absolute;
  top: 8px;
}

.content {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  color: rgb(var(--v-theme-secondary));
}

.container {
  display: grid;
}

.first-column {
  clip-path: polygon(
    0 0,
    100% 0,
    100% 15%,
    95% 20%,
    95% 100%,
    88% 75%,
    100% 88%,
    100% 100%,
    0 100%,
    0 100%
  );
  background-color: rgb(var(--v-theme-secondary));
}

.second-column {
  padding-right: 10rem;
}

@media (min-width: 961px) {
  .container {
    grid-template-columns: 1fr 2fr;
  }

  .first-column {
    padding-left: 10rem;
    padding-right: 3rem;
  }

  .second-column {
    padding-right: 10rem;
  }
}

@media (max-width: 960px) {
  .container {
    grid-template-columns: 1fr 2fr;
  }

  .first-column {
    padding-left: 6rem;
    padding-right: 1rem;
  }

  .second-column {
    padding-right: 6rem;
  }
}

@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }

  .first-column {
    padding: 1rem;
  }
  .second-column {
    padding: 0.5rem;
  }
}
</style>
