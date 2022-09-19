export default {
  id: 'p-d7tyrhsiy0',
  meta: {
    title: 'Test Form'
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
                layout: [12],
                children: [
                  {
                    id: 'c-rtf75960ps',
                    meta: {
                      label: 'Column'
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
                            text: 'Header'
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
                          id: 'b-ryghfb6y7t',
                          meta: {
                            label: 'Block 1'
                          },
                          entity: 'block',
                          styles: {},
                          type: 'form',
                          content: {
                            fields: [
                              {
                                code: '798r',
                                name: {
                                  token: 'first_name',
                                  value: 'First Name'
                                },
                                type: 'contactfield',
                                label: 'First Name',
                                required: true,
                                overwrite: true,
                                placeholder: 'Enter First Name',
                                contactfield: {
                                  name: 'first_name',
                                  type: 'textfield',
                                  label: 'First Name'
                                }
                              },
                              {
                                code: 'gh57',
                                name: {
                                  token: 'last_name',
                                  value: 'Last Name'
                                },
                                type: 'contactfield',
                                label: 'Last Name',
                                required: true,
                                overwrite: true,
                                placeholder: 'Enter Last Name',
                                contactfield: {
                                  name: 'last_name',
                                  type: 'textfield',
                                  label: 'Last Name'
                                }
                              },
                              {
                                code: 'g859',
                                name: {
                                  token: 'email',
                                  value: 'Email'
                                },
                                type: 'contactfield',
                                label: 'Email',
                                required: true,
                                overwrite: true,
                                placeholder: 'Enter Email',
                                contactfield: {
                                  name: 'email',
                                  type: 'emailfield',
                                  label: 'Email'
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
                      label: 'Column'
                    },
                    entity: 'column',
                    styles: {},
                    content: {
                      children: [
                        {
                          id: 'b-1tfgd746st',
                          meta: {
                            label: 'Block'
                          },
                          entity: 'block',
                          type: 'text',
                          styles: {},
                          content: {
                            text: 'footer'
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
    ]
  }
}
