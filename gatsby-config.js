module.exports = {
  siteMetadata: {
    title: `Linode Developer Tools`,
    description: `Linode API Documentation, Guides, and Tools`,
    menuLinks: [
      {
        name: "API Documentation",
        link: "/api/v4"
      },
      {
        name: "Guides",
        link: "/guides"
      },
      {
        name: "Libraries & Tools",
        link: "/libraries-tools"
      },
      {
        name: "Kubernetes",
        link: "/kubernetes"
      },
      {
        name: "Changelog",
        link: "/changelog/"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-177150-22",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "",
        // Enables Google Optimize Experiment ID
        experimentId: "",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "developers.linode.com"
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
        options: {
          manualInit: true
        }
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ccc`,
        theme_color: `#666`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs`
        }
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelist: [
          "mobile-nav",
          "active",
          "active-item",
          "error",
          "open",
          "table",
          "tbody",
          "thead",
          "th",
          "td"
        ],
        purgeOnly: ["src/css/main.css"], // Purge only tailwind
        develop: true
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [
          `name`,
          `getSummary`,
          `putSummary`,
          `postSummary`,
          `deleteSummary`
        ],
        resolvers: {
          Paths: {
            name: node => node.name,
            getSummary: node => node["get"] && node["get"].summary,
            putSummary: node => node["put"] && node["put"].summary,
            postSummary: node => node["post"] && node["post"].summary,
            deleteSummary: node => node["delete"] && node["delete"].summary
          }
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
