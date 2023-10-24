#!/bin/bash

# Ensure that any error stops the script
set -e

echo "Comparing execution times between NPM and Bun..."

# Initialize accumulators for average calculations
total_time_npm=0
total_time_bun=0
num_runs=5

# Arrays to hold the individual run times
times_npm=()
times_bun=()

# File to store timing results
output_file="timing_results.txt"

# Clear/Initialize the output file
echo "Timing Results" > "$output_file"

# NPM Group
for (( run=1; run<=$num_runs; run++ ))
do
    echo "Running NPM command run #$run..."
    start_time_npm=$(date +%s%N)
    npx -y --ignore-existing create-react-app my-app
    end_time_npm=$(date +%s%N)
    rm -rf my-app  # Clean up
    
    elapsed_npm=$(( ($end_time_npm - $start_time_npm) / 1000000))
    
    # Add elapsed time to array and accumulator
    times_npm+=("$elapsed_npm")
    total_time_npm=$(( $total_time_npm + $elapsed_npm ))
done

# Bun Group
for (( run=1; run<=$num_runs; run++ ))
do
    echo "Running Bun command run #$run..."
    start_time_bun=$(date +%s%N)
    bunx create-react-app my-app
    end_time_bun=$(date +%s%N)
    rm -rf my-app  # Clean up
    
    elapsed_bun=$(( ($end_time_bun - $start_time_bun) / 1000000))
    
    # Add elapsed time to array and accumulator
    times_bun+=("$elapsed_bun")
    total_time_bun=$(( $total_time_bun + $elapsed_bun ))
done

# Print and Write each run time grouped by tool
echo -e "\nNPM Run times:" | tee -a "$output_file"
for (( i=0; i<$num_runs; i++ ))
do
    echo "Run $(($i + 1)) time: ${times_npm[$i]} ms" | tee -a "$output_file"
done

average_time_npm=$(( $total_time_npm / $num_runs ))
echo "Average NPM execution time over $num_runs runs: $average_time_npm ms" | tee -a "$output_file"

echo -e "\nBun Run times:" | tee -a "$output_file"
for (( i=0; i<$num_runs; i++ ))
do
    echo "Run $(($i + 1)) time: ${times_bun[$i]} ms" | tee -a "$output_file"
done

average_time_bun=$(( $total_time_bun / $num_runs ))
echo "Average Bun execution time over $num_runs runs: $average_time_bun ms" | tee -a "$output_file"
