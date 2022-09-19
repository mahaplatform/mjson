import Entity from './entity'

export default function Dynamic(website, rules, dynamic, extra) {

  return [
    ...dynamic.template.content.children,
    ...dynamic.empty.content.children
  ].reduce((config, child) => {
    return Entity(website, config, child, extra)
  }, rules)

}
