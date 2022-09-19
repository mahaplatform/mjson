import Dynamic from './dynamic'
import Section from './section'
import Column from './column'
import Block from './block'
import Page from './page'
import Row from './row'

export default function Entity(website, rules, entity, extra) {
  if(!entity) return rules
  if(_.includes(['page','template'], entity.entity)) return Page(website, rules, entity, extra)
  if(entity.entity === 'section') return Section(website, rules, entity, extra)
  if(entity.entity === 'row') return Row(website, rules, entity, extra)
  if(entity.entity === 'column') return Column(website, rules, entity, extra)
  if(entity.entity === 'block') return Block(website, rules, entity, extra)
  if(entity.entity === 'dynamic') return Dynamic(website, rules, entity, extra)
  return rules
}
