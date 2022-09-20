// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skadi',
  tagline: 'Flutter utilities packages for custom widgets and utilities function.',
  url: "https://lynical-software.github.io/",
  baseUrl: "/skadi-doc/",
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lynical-software", // Usually your GitHub org/user name.
  projectName: "skadi-doc", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Skadi",
        logo: {
          alt: 'My Site Logo',
          src: 'img/snowflake.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'installation',
            position: 'left',
            label: 'Documentation',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: "https://github.com/lynical-software/skadi",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: 'Popular Utilities',
            items: [
              {
                label: 'DeferDispose Mixin',
                to: '/docs/defer-dispose',
              },
              {
                label: 'SkadiFormMixin',
                to: '/docs/skadi-form-mixin',
              },
              {
                label: 'SkadiResponsive',
                to: '/docs/skadi-responsive',
              },
            ],
          },
          {
            title: 'Popular Widgets',
            items: [
              {
                label: 'LoadingOverlay',
                to: '/docs/loading-overlay',
              },
              {
                label: 'SkadiAsyncButton',
                to: '/docs/skadi-async-button',
              },
              {
                label: 'SkadiIconButton',
                to: '/docs/skadi-icon-button',
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/lynical-software/skadi",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lynical, Inc. Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: "dart",
        theme: require("prism-react-renderer/themes/nightOwl"),
        darkTheme: require("prism-react-renderer/themes/nightOwl"),
        additionalLanguages: ["dart"],
      },

    }),
};

module.exports = config;
