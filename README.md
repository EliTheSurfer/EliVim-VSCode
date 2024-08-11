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


#### 1. Install the extensions
To install the extensions, run the following command:
##### on Mac OS:
```bash
> cat extensions.txt | xargs -L 1 code --install-extension
```
##### on Linux:
```bash
> cat extensions.txt | xargs -L 1 codium --install-extension
```
This command installs each extension listed in the `extensions.txt` file using the `code --install-extension` command (codium in Linux).

#### 2. Copy/overwrite configuration files
Now copy `keybindings.json`, `settings.json`, and `welcomePage.js` to your VSCode User folder:
##### on Mac OS:
```bash
cp -i keybindings.json settings.json welcomePage.js "$HOME/Library/Application Support/Code/User"
```
##### on Linux:
```bash
cp keybindings.json settings.json welcomePage.js "$HOME/.config/VSCodium/User/"
```
This command copies the mentioned files to the appropriate location in your VSCode User folder.

#### 3. Reload/Restart VS Code
Reload or restart VSCode and
now you are done! You can enjoy this minimalist VSCode setup.

### Usage

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
