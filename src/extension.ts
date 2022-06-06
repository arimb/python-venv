import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('python-venv.new_venv', () => {
		var terminal = vscode.window.createTerminal('pwsh-venv');
		terminal.sendText("python3 -m venv .venv");
		terminal.sendText(".venv/Scripts/activate.ps1");
	});

	context.subscriptions.push(disposable1);

	let disposable2 = vscode.commands.registerCommand('python-venv.activate_venv', () => {
		var terminal = vscode.window.createTerminal('pwsh-venv');
		terminal.sendText(".venv/Scripts/activate.ps1");
	});

	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
