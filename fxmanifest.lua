fx_version "adamant"
game "gta5"

-- Script Information
name "Simple ProgressBar"
author "santos#0069"
description "A simple progressbar for every to use <3"
version "1.1"
---------------------

ui_page('html/index.html')

files {
    'html/**.**',
}

client_scripts {
	'client/*.lua',
}

-- Escrow Information
lua54 'yes'
escrow_ignore {
	"*.lua",
	"*/*.lua",
}

