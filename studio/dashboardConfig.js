export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622fc51af6dec837a53c1f0d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-t-3-studio',
                  apiId: 'd6c295a3-7b09-4723-adf5-75d743264498'
                },
                {
                  buildHookId: '622fc51a7e55733104e0404f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-t-3',
                  apiId: '07e812ba-7c41-4bb4-8fe7-1436a1d54003'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshua-cmd/sanity-gatsby-portfolio.t3',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-t-3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
