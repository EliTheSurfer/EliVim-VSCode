# EliVim-VSCode
Customize VSCode to prioritize keyboard usage as much as possible (inspired by Neovim)
<img src="https://github.com/EliTheSurfer/EliVim-VSCode/blob/main/assets/presentation.gif" width="1050px">
<img alt="Screenshot" src="https://elivim-vscode.s3.eu-west-3.amazonaws.com/vscode+ricing/Screenshot+2024-08-09+at+01.11.50.png">

## Plan

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
   - [Install the extensions](#1-install-the-extensions)
   - [Copy/overwrite configuration files](#2-copyoverwrite-configuration-files)
   - [Reload/Restart VS Code](#3-reloadrestart-vs-code)
3. [Usage](#usage)
   - [Toggle terminal (cmd+,  cmd+t or ctrl+j)](#toggle-terminal-cmd-cmdt-or-ctrlj)
   - [Git (ctrl+g)](#git-ctrlg)
   - [Search text (cmd+shift+f)](#search-text-cmdshiftf)
   - [Search file (cmdp)](#search-file-cmdp)
   - [The welcome page](#the-welcome-page)

4. [Contributing](#contributing)


## Prerequisites

Before customizing VSCode, make sure you have the following tools installed on your machine:

- [fzf](https://github.com/junegunn/fzf)
- [ripgrep](https://github.com/BurntSushi/ripgrep)
- [lazygit](https://github.com/jesseduffield/lazygit)

These tools are essential for enhancing your keyboard-first experience with VSCode.
You can install these tools using the following commands:
```bash
# Mac OS
brew install fzf
brew install ripgrep
brew install lazygit

# Windows
choco install fzf
choco install ripgrep
choco install lazygit

# Ubuntu Linux
sudo apt-get install fzf
sudo apt-get install ripgrep
sudo apt-get install lazygit

# Arch Linux
sudo pacman fzf ripgrep lazygit
```

You also need to install the following fonts:
- [Fira Code](https://github.com/tonsky/FiraCode)
- [JetBrains Mono](https://www.jetbrains.com/fr-fr/lp/mono/)


Once you have installed these prerequisites, you can proceed with the customization steps.

### Installation

⚠️ **Warning:** Before customizing VSCode, it is highly recommended to make a backup of your current setup. This will allow you to revert back to your original configuration if needed.
##### on Mac OS:
```bash
> cp "${userHome}/Library/Application Support/Code/User/" "${userHome}/Library/Application Support/Code/User.bak"
```
#### on Linux:
```bash
>cp "$XDG_CONFIG_DIR/VSCode/User" "$XDG_CONFIG_DIR/VSCode/User.bak"
```

#### 1. Install the extensions
To install the extensions, run the following command:
##### on Mac OS:
```bash
> cat extensions.txt | xargs -L 1 code --install-extension
```
##### on Linux:
```bash
> cat extensions.txt | xargs -L 1 code --install-extension
```
This command installs each extension listed in the `extensions.txt` file using the `code --install-extension` command (code for the closed source version, codium for the open sourced, in Linux).

#### 2. Copy/overwrite configuration files
Now copy `keybindings.json`, `settings.json`, and `welcomePage.js` to your VSCode User folder:
##### on Mac OS:
```bash
cp -i keybindings.json settings.json welcomePage.js "${userHome}/Library/Application Support/Code/User"
```
##### on Linux:
In Linux, several additional steps are required for this configuration to run properly. First, the [APC Customize UI Plugin](https://github.com/drcika/apc-extension) needs to be able to manipulate the files in the VSCode/Codium installation. This process is described [here](https://github.com/drcika/apc-extension?tab=readme-ov-file#mac-and-linux-users). Also, Linux users should edit the 'settings_linux.json' to ensure paths are correct for your distribution.  

```bash
cp keybindings.json welcomePage.js "$XDG_CONFIG_DIR/VSCode/User/"
cp settings_linux.json "$XDG_CONFIG_DIR/VSCode/User/settings.json"
```
This command copies the mentioned files to the appropriate location in your VSCode User folder.

#### 3. Reload/Restart VS Code
Reload or restart VSCode and
now you are done! You can enjoy this minimalist VSCode setup.

### Usage  

This table shows the current keybindings, editable in "keybindings.json".  

| key                | command                                      | trigger                                                                                                                                                                                     | args     |
| ------------------ | -------------------------------------------- | -| -------- |
| shift+cmd+t        | -workbench.action.reopenClosedEditor         |                                                                                                                                                                                          |          |
| shift+cmd+t        | workbench.action.terminal.new                | terminalProcessSupported                                                                                                                                                                 |          |
| ctrl+shift+`       | -workbench.action.terminal.new               | terminalProcessSupported                                                                                                                                                                 |          |
| cmd+[KeyM]         | workbench.action.createTerminalEditor        |                                                                                                                                                                                          |          |
| cmd+h              | workbench.action.toggleActivityBarVisibility |                                                                                                                                                                                          |          |
| ctrl+`             | -workbench.action.terminal.toggleTerminal    | terminal.active                                                                                                                                                                          |          |
| alt+f              | eslint.executeAutofix                        |                                                                                                                                                                                          |          |
| ctrl+shift+g       | editor.action.rename                         | editorHasRenameProvider && editorTextFocus && !editorReadonly                                                                                                                            |          |
| f2                 | -editor.action.rename                        | editorHasRenameProvider && editorTextFocus && !editorReadonly                                                                                                                            |          |
| shift+cmd+g        | workbench.action.tasks.runTask               |                                                                                                                                                                                          | LazyGit  |
| ctrl+shift+g       | -workbench.view.scm                          | !gitlens:disabled && config.gitlens.keymap == 'chorded'                                                                                                                                  |          |
| shift+cmd+t        | -extension.goToTest                          | editorTextFocus                                                                                                                                                                          |          |
| shift+cmd+t        | extension.splitTestFile                      | editorTextFocus                                                                                                                                                                          |          |
| cmd+f1             | -extension.splitTestFile                     | editorTextFocus                                                                                                                                                                          |          |
| cmd+[Comma] f      | -testing.runCurrentFile                      | editorTextFocus                                                                                                                                                                          |          |
| ctrl+t             | runCurrentTest.run                           |                                                                                                                                                                                          |          |
| ctrl+f             | runCurrentTest.runAndUpdateSnapshots         |                                                                                                                                                                                          |          |
| ctrl+g             | workbench.action.tasks.runTask               | terminalProcessSupported                                                                                                                                                                 | LazyGit  |
| cmd+8              | editor.action.marker.next                    | editorFocus                                                                                                                                                                              |          |
| alt+f8             | -editor.action.marker.next                   | editorFocus                                                                                                                                                                              |          |
| cmd+9              | editor.action.marker.nextInFiles             | editorFocus                                                                                                                                                                              |          |
| f8                 | -editor.action.marker.nextInFiles            | editorFocus                                                                                                                                                                              |          |
| ctrl+alt+cmd+right | workbench.action.decreaseViewSize            |                                                                                                                                                                                          |          |
| ctrl+alt+cmd+left  | workbench.action.increaseViewSize            |                                                                                                                                                                                          |          |
| ctrl+alt+cmd+up    | workbench.action.evenEditorWidths            |                                                                                                                                                                                          |          |
| cmd+t              | -workbench.action.showAllSymbols             |                                                                                                                                                                                          |          |
| cmd+t              | workbench.action.createTerminalEditorSide    |                                                                                                                                                                                          |          |
| ctrl+tab           | extension.goToTest                           |                                                                                                                                                                                          |          |
| cmd+p              | -extension.GoToAnything                      |                                                                                                                                                                                          |          |
| ctrl+cmd+p         | searchEverywhere.search                      |                                                                                                                                                                                          |          |
| alt+cmd+p          | -searchEverywhere.search                     |                                                                                                                                                                                          |          |
| shift+alt          | fuzzySearch.activeTextEditor                 |                                                                                                                                                                                          |          |
| alt+cmd+p          | projectManager.listProjects                  |                                                                                                                                                                                          |          |
| alt+cmd+p          | -projectManager.listProjects                 |                                                                                                                                                                                          |          |
| cmd+u              | -cursorUndo                                  | textInputFocus                                                                                                                                                                           |          |
| cmd+u              | thunder-client.import-curl                   |                                                                                                                                                                                          |          |
| shift+cmd+c        | -workbench.action.terminal.openNativeConsole | !terminalFocus                                                                                                                                                                           |          |
| shift+cmd+c        | vscode-chatgpt.view.focus                    |                                                                                                                                                                                          |          |
| shift+cmd+r        | -rerunSearchEditorSearch                     | inSearchEditor                                                                                                                                                                           |          |
| shift+cmd+r        | -nodeReadme.showReadme                       | editorTextFocus                                                                                                                                                                          |          |
| shift+cmd+r        | vscode-chatgpt.optimize                      |                                                                                                                                                                                          |          |
| shift+cmd+t        | vscode-chatgpt.addTests                      |                                                                                                                                                                                          |          |
| ctrl+j             | workbench.action.terminal.toggleTerminal     |                                                                                                                                                                                          |          |
| shift+alt+right    | editor.action.inlineSuggest.showNext         |                                                                                                                                                                                          |          |
| shift+alt+left     | editor.action.inlineSuggest.showPrevious     |                                                                                                                                                                                          |          |
| shift+alt+down     | editor.action.inlineSuggest.trigger          |                                                                                                                                                                                          |          |
| shift+cmd+a        | copilot-labs.use-brush-picker                | editorTextFocus                                                                                                                                                                          |          |
| shift+alt+cmd+e    | -copilot-labs.use-brush-picker               | editorTextFocus                                                                                                                                                                          |          |
| shift+cmd+t        | chatgpt-vscode.addTests                      | editorHasSelection                                                                                                                                                                       |          |
| cmd+k shift+cmd+1  | -chatgpt-vscode.addTests                     | editorHasSelection                                                                                                                                                                       |          |
| shift+cmd+c        | chatgpt-vscode.adhoc                         | editorHasSelection                                                                                                                                                                       |          |
| cmd+k shift+cmd+7  | -chatgpt-vscode.adhoc                        | editorHasSelection                                                                                                                                                                       |          |
| shift+cmd+c        | chatgpt-vscode.freeText                      |                                                                                                                                                                                          |          |
| shift+cmd+m        | workbench.action.toggleMaximizedPanel        |                                                                                                                                                                                          |          |
| shift+cmd+g        | -editor.action.previousMatchFindAction       | editorFocus                                                                                                                                                                              |          |
| shift+cmd+g        | -workbench.action.terminal.findPrevious      | terminalFindFocused && terminalHasBeenCreated \|\| terminalFindFocused && terminalProcessSupported \|\| terminalFocus && terminalHasBeenCreated \|\| terminalFocus && terminalProcessSupported |          |
| shift+cmd+f        | find-it-faster.findWithinFiles               |                                                                                                                                                                                          |          |
| shift+cmd+u        | -find-it-faster.findWithinFiles              |                                                                                                                                                                                          |          |
| shift+cmd+u        | workbench.view.search                        | workbench.view.search.active && neverMatch =~ /doesNotMatch/                                                                                                                             |          |
| shift+cmd+f        | -workbench.view.search                       | workbench.view.search.active && neverMatch =~ /doesNotMatch/                                                                                                                             |          |
| shift+cmd+r        | chatgpt-vscode.optimize                      | editorHasSelection                                                                                                                                                                       |          |
| cmd+k shift+cmd+3  | -chatgpt-vscode.optimize                     | editorHasSelection                                                                                                                                                                       |          |
| shift+cmd+k        | workbench.action.terminal.killAll            |                                                                                                                                                                                          |          |
| shift+cmd+g        | workbench.scm.focus                          |                                                                                                                                                                                          |          |
| ctrl+g             | lazygit-vscode.toggle                        |                                                                                                                                                                                          |          |
| shift+cmd+l        | -lazygit-vscode.toggle                       |                                                                                                                                                                                          |          |
| ctrl+p             | binocular.customCommands                     |                                                                                                                                                                                          | pipeline |
| ctrl+shift+p       | binocular.customCommands                     |                                                                                                                                                                                          |          |
| shift+tab          | workbench.action.previousEditorInGroup       |                                                                                                                                                                                          |          |
| cmd+k alt+cmd+left | -workbench.action.previousEditorInGroup      |                                                                                                                                                                                          |          |
| shift+tab          | workbench.action.previousEditor              |                                                                                                                                                                                          |          |
| ctrl+alt+cmd+5     | -workbench.action.previousEditor             |                                                                                                                                                                                          |          |
| alt+cmd+left       | -workbench.action.previousEditor             |                                                                                                                                                                                          |          ||



#### Toggle terminal (cmd+,  cmd+t or ctrl+j)
Press cmd+t to toggle the terminal on the side.
Press cmd+, to open a full editor terminal.
Press ctrl+j to open the integrated terminal.

#### Git (ctrl+g)
Press `ctrl+g` to open `lazygit`.
With this tool, you can perform all your git operations using the keyboard only.

<img alt="Screenshot" src="https://elivim-vscode.s3.eu-west-3.amazonaws.com/vscode+ricing/Screenshot+2024-08-09+at+01.03.14.png">

#### Search text (cmd+shift+f)
Press `cmd+shift+f` to search for text in your project.
This will trigger `find-it-faster` extension, which is a fzf-rigrep wrapper for VSCode.
It has the advantage of showing a preview of the file where the text is found.

<img alt="Screenshot" src="https://elivim-vscode.s3.eu-west-3.amazonaws.com/vscode+ricing/Screenshot+2024-08-09+at+01.47.09.png">

#### Search file (cmd+p)
Press `cmd+p` to search for a file in your project.
This will trigger the command palette, which has been redesigned. It is noticeably bigger and centered, so you don't have to look at the top of the screen to see the results.

<img alt="Screenshot" src="https://elivim-vscode.s3.eu-west-3.amazonaws.com/vscode+ricing/Screenshot+2024-08-09+at+01.47.47.png">

#### The welcome page
The welcome page has also been redesigned.
You can modify the welcome page by editing the `welcomePage.js` file.

<img alt="Screenshot" src="https://elivim-vscode.s3.eu-west-3.amazonaws.com/vscode+ricing/Screenshot+2024-08-09+at+01.46.39.png">

### Contributing
If you have any suggestions or improvements, feel free to open an issue or a pull request.
Note that I am currently using Mac OS, so improvements for the documentation on other OSes are more than welcome.
