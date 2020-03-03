{pkgs ? import <nixpkgs> {}}:

pkgs.stdenv.mkDerivation {
  name = "sql-shell";
  buildInputs = [pkgs.postgresql];
}
