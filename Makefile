.PHONY: all clean install kata

# Clean the project by removing all untracked files and directories,
# including those in .gitignore.
# -f: force
# -d: remove directories
# -X: remove only files ignored by Git
clean:
	git clean -fdX

# Install project dependencies using pnpm.
install:
	pnpm install

# Optional: A default target that might run install or other common tasks.
# For example, if you want 'make' to run 'pnpm install' by default:
# default: install
# .DEFAULT_GOAL := default

# Start the kata in watch mode using pnpm.
kata:
	pnpm watch

# Run all common tasks: clean, install, and start the kata.
all: clean install kata
