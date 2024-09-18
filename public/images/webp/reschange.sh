#!/bin/bash

for img in "$(pwd)"/*.webp; do
    temp_img="${img%.*}_temp.${img##*.}"

    ffmpeg -i "$img" -vf scale=225x225 "$temp_img"

    if [ $? -eq 0 ]; then
        mv "$temp_img" "$img"
    else
        rm "$temp_img"
    fi
done

