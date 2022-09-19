export default {
  id: 'p-d7tyrhsiy0',
  meta: {
    title: 'Test Web Page'
  },
  entity: 'page',
  styles: {},
  content: {
    children: [
      {
        id: 's-fhgyt7e8di',
        meta: {
          label: 'Header'
        },
        entity: 'section',
        styles: {},
        content: {
          children: [
            {
              id: 'r-4y46fcmjk9',
              meta: {
                label: 'Row'
              },
              entity: 'row',
              styles: {},
              content: {
                layout: {
                  desktop: [6,6],
                  mobile: [12]
                },
                children: [
                  {
                    id: 'c-rtf75960ps',
                    meta: {
                      label: 'Column 1'
                    },
                    entity: 'column',
                    styles: {},
                    content: {
                      children: [
                        {
                          id: 'b-ryghfb6y7t',
                          meta: {
                            label: 'Block 1'
                          },
                          entity: 'block',
                          styles: {},
                          type: 'text',
                          content: {
                            text: 'This is column 1'
                          }
                        },
                        {
                          id: 'b-ah5ry6ghta',
                          meta: {
                            label: 'Button 1'
                          },
                          entity: 'block',
                          styles: {},
                          type: 'button',
                          content: {
                            text: 'This is a buttons'
                          }
                        }
                      ]
                    }
                  },
                  {
                    id: 'c-346wsfdcyg',
                    meta: {
                      label: 'Column 2'
                    },
                    entity: 'column',
                    styles: {},
                    content: {
                      children: [
                        {
                          id: 'b-nx65sd432o',
                          meta: {
                            label: 'Block 1'
                          },
                          entity: 'block',
                          styles: {},
                          type: 'text',
                          content: {
                            text: 'This is column 2'
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        id: 's-rtfgd75643',
        meta: {
          label: 'Body'
        },
        entity: 'section',
        styles: {},
        content: {
          children: [
            {
              id: 'r-46etdgzaq3',
              meta: {
                label: 'Row'
              },
              entity: 'row',
              styles: {},
              content: {
                layout: [12],
                children: [
                  {
                    id: 'c-tfhe74q212',
                    meta: {
                      label: 'Column 1'
                    },
                    entity: 'column',
                    styles: {},
                    content: {
                      children: [
                        {
                          id: 'b-poi06948ft',
                          meta: {
                            label: 'Block 1'
                          },
                          entity: 'block',
                          styles: {},
                          type: 'text',
                          content: {
                            text: 'This is a test'
                          }

                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        id: 's-56fgcfspo0',
        meta: {
          label: 'Footer'
        },
        entity: 'section',
        styles: {},
        content: {
          children: [
            {
              id: 'r-ersfx6576p',
              meta: {
                label: 'Row'
              },
              entity: 'row',
              styles: {},
              content: {
                layout: [12],
                children: [
                  {
                    id: 'c-rt46shdnv7',
                    meta: {
                      label: 'Column 1'
                    },
                    entity: 'column',
                    styles: {},
                    content: {
                      children: [
                        {
                          id: 'b-1tfgd746st',
                          meta: {
                            label: 'Block 1'
                          },
                          entity: 'block',
                          type: 'spacer',
                          styles: {
                            height: 100
                          },
                          content: {}
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
