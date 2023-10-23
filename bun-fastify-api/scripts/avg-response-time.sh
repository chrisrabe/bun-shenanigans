#!/bin/bash

# NOTE: AWK DOES NOT EXIST IN MacOS. Modify the script so that it uses gawk (you would have to run brew install gawk)

# Set the log file name
log_file="$1"

# Use grep to extract lines containing "responseTime"
# Use awk to extract the "responseTime" value and calculate the sum and count
# Use bc to calculate the average
average=$(grep "responseTime" "$log_file" | \
          awk -F'responseTime":' '{sum += $2; count++} END {print sum/count}')

# Print the average response time
echo "Average response time: $average"
