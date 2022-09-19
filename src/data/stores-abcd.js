export default {
  id: 'p-d7tyrhsiy0',
  meta: {
    title: '2022 Master Gardener Fall Bulb Sale'
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
                          styles: {
                            backgroundColor: '#21ba45',
                            padding: 15,
                            textAlign: 'center'
                          },
                          type: 'text',
                          content: {
                            text: '2022 Master Gardener Fall Bulb Sale'
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
        id: 's-tfgdh5647d',
        meta: {
          label: 'Search'
        },
        entity: 'section',
        styles: {},
        content: {
          children: [
            {
              id: 'r-hfgry5647',
              meta: {
                label: 'Row'
              },
              entity: 'row',
              styles: {},
              content: {
                layout: [12],
                children: [
                  {
                    id: 'c-qprifh4637',
                    meta: {
                      label: 'Column'
                    },
                    entity: 'column',
                    styles: {},
                    content: {
                      children: [
                        {
                          id: 'b-rugh564732',
                          meta: {
                            label: 'Block'
                          },
                          entity: 'block',
                          type: 'search',
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
      },

      {
        id: 's-yfhgyt7685',
        meta: {
          label: 'Categories'
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
                    id: 'd-1tfgd746st',
                    meta: {
                      label: 'Categories'
                    },
                    entity: 'dynamic',
                    query: {
                      name: {
                        token: 'category',
                        value: 'Categories'
                      },
                      type_id: 'maha_categories',
                      store_id: 'abcd'
                    },
                    empty: {
                      styles: {},
                      content: {
                        children: []
                      }
                    },
                    template: {
                      styles: {
                        backgroundColor: {
                          desktop: null,
                          hover: 'rgba(0,0,0,0.5)'
                        },
                        padding: 15,
                        cursor: 'pointer'
                      },
                      content: {
                        children: [
                          {
                            id: 'c-atgrt67f75',
                            meta: {
                              label: 'Column'
                            },
                            entity: 'column',
                            styles: {},
                            content: {
                              children: [
                                {
                                  id: 'b-ayghf75698',
                                  meta: {
                                    label: 'Block 1'
                                  },
                                  entity: 'block',
                                  styles: {},
                                  type: 'text',
                                  content: {
                                    text: '<%= category.title %>'
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
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
                layout: {
                  desktop: [2,2,2,2,2,2],
                  tablet: [3,3,3,3],
                  mobile: [6,6]
                },
                children: [
                  {
                    id: 'd-1tfgd746st',
                    meta: {
                      label: 'Products'
                    },
                    entity: 'dynamic',
                    query: {
                      name: {
                        token: 'product',
                        value: 'Products'
                      },
                      type_id: 'maha_products',
                      store_id: 'abcd'
                    },
                    empty: {
                      styles: {},
                      content: {
                        children: []
                      }
                    },
                    template: {
                      styles: {
                        backgroundColor: {
                          desktop: null,
                          hover: 'rgba(0,0,0,0.3)'
                        },
                        padding: 15,
                        cursor: 'pointer'
                      },
                      content: {
                        children: [
                          {
                            id: 'c-atgrt67f75',
                            meta: {
                              label: 'Column'
                            },
                            entity: 'column',
                            styles: {},
                            content: {
                              children: [
                                {
                                  id: 'b-ayghf75698',
                                  meta: {
                                    label: 'Block 1'
                                  },
                                  entity: 'block',
                                  styles: {},
                                  type: 'image',
                                  content: {
                                    src: '<%= product.image %>'
                                  }
                                },
                                {
                                  id: 'b-uthgyf75yt',
                                  meta: {
                                    label: 'Block 2'
                                  },
                                  entity: 'block',
                                  styles: {
                                    height: 40,
                                    textAlign: 'center'
                                  },
                                  type: 'text',
                                  content: {
                                    text: '<h3><%= product.title %></h3>'
                                  }
                                },
                                {
                                  id: 'b-pfhdyrtefd',
                                  meta: {
                                    label: 'Block 3'
                                  },
                                  entity: 'block',
                                  styles: {
                                    textAlign: 'center'
                                  },
                                  type: 'text',
                                  content: {
                                    text: '<p><%= numeral(product.price).format(\'$0.00\') %></p>'
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
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
