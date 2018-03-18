puts "Hello World";
print <<`EOF`                 # execute commands
	echo hi there
	echo lo there
EOF
END {
   puts "Terminating Ruby Program"
}
BEGIN {
   puts "Initializing Ruby Program"
}