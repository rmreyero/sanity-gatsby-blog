export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d727d64dddb2b01877a74f4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-otzxw51o',
                  apiId: '4797bd95-edf4-4a91-93d0-bc4891d151c1'
                },
                {
                  buildHookId: '5d727d64e3c984259a9ff60d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p8zme1s2',
                  apiId: '1cec6b11-a504-4cfb-97e9-f35d3b09a64d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neojamon/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p8zme1s2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
