import { termToPath, findTermPath } from './src/utils/terms'

let errors = 0
for (const key of Object.keys(termToPath)) {
  const path = findTermPath(key)
  if (!path) {
    console.error(`❌ findTermPath("${key}") 返回 undefined`)
    errors++
  } else if (path.join('/') !== termToPath[key].join('/')) {
    console.error(`⚠️ findTermPath("${key}") 路径不一致`, path, termToPath[key])
    errors++
  }
}
console.log(errors === 0 ? `✅ ${Object.keys(termToPath).length} 个术语查找均正常` : `发现 ${errors} 个问题`)
