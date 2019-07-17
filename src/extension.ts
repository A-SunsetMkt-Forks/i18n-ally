import { ExtensionContext } from 'vscode'
import { flatten } from 'lodash'
import { Global } from './core'
import commandsModules from './commands'
import editorModules from './editor'
import viewsModules from './views'

export async function activate (ctx: ExtensionContext) {
  Global.outputChannel.appendLine('🈶 Activated')

  // activate the extension
  await Global.init(ctx)

  const modules = [
    commandsModules,
    editorModules,
    viewsModules,
  ]
  const disposables = flatten(modules.map(m => m(ctx)))
  disposables.forEach(d => ctx.subscriptions.push(d))
}

export function deactivate () {
  Global.outputChannel.appendLine('🈚 Deactivated')
}
