# frozen_string_literal: true

desc 'Improve style'
task nag: :rubocop

desc 'Fix linter errors'
task make_standard: :rubocop_fix

desc 'Check code'
task test: :spec

desc 'lint and run tests'
task default: %i[nag test]
