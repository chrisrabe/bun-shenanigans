#!/bin/bash

# Define the package name
pkg_name="express"

# Commands
bun_install_cmd="bun install $pkg_name"
npm_install_cmd="npm install $pkg_name"
yarn_install_cmd="yarn add $pkg_name"

bun_remove_cmd="bun remove $pkg_name"
npm_remove_cmd="npm uninstall $pkg_name"
yarn_remove_cmd="yarn remove $pkg_name"

# Variable to store timing results
timing_results="Timing Results:\n"

# Define a function to install and remove package using a package manager
run_commands() {
    local total_install_time=0
    local total_remove_time=0
    local num_runs=5
    
    echo "Using $1"
    timing_results+="\n$1 Timings (ms)\n"
    
    for ((i=1; i<=$num_runs; i++)); do
        echo "Run $i"
        
        # Install package
        echo "Installing $pkg_name using $1..."
        install_start_time=$(date +%s%3N)
        $2
        install_status=$?
        install_end_time=$(date +%s%3N)
        install_duration=$((install_end_time - install_start_time))
        total_install_time=$((total_install_time + install_duration))
        
        # Check if installation was successful
        if [ $install_status -eq 0 ]; then
            echo "Installation successful"
        else
            echo "Installation failed"
            exit 1
        fi
        
        # Remove package
        echo "Removing $pkg_name using $1..."
        remove_start_time=$(date +%s%3N)
        $3
        remove_status=$?
        remove_end_time=$(date +%s%3N)
        remove_duration=$((remove_end_time - remove_start_time))
        total_remove_time=$((total_remove_time + remove_duration))
        
        # Check if removal was successful
        if [ $remove_status -eq 0 ]; then
            echo "Removal successful"
        else
            echo "Removal failed"
            exit 1
        fi
        
        # Append individual timing results
        timing_results+="Run $i - Install: $install_duration ms, Remove: $remove_duration ms\n"
    done
    
    # Calculate and append average timing results
    avg_install_time=$((total_install_time / num_runs))
    avg_remove_time=$((total_remove_time / num_runs))
    
    timing_results+="Average Install: $avg_install_time ms\n"
    timing_results+="Average Remove:  $avg_remove_time ms\n"
}

# Using Bun
run_commands "Bun" "$bun_install_cmd" "$bun_remove_cmd"

# Using Npm
run_commands "Npm" "$npm_install_cmd" "$npm_remove_cmd"

# Using Yarn
run_commands "Yarn" "$yarn_install_cmd" "$yarn_remove_cmd"

# Print timing results
echo -e "\n$timing_results"
