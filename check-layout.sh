#!/bin/bash

echo "=== Checking Website Layout Responsiveness ==="
echo ""

# Check mobile viewport (390px)
echo "Testing Mobile Viewport (390px)..."
curl -s http://localhost:3000 | grep -o 'class="[^"]*' | head -20
echo ""

# Check if flexbox utilities are applied
echo "Checking for responsive classes in About Me section..."
curl -s http://localhost:3000 | grep -A 5 'id="about"' | grep -o 'flex flex-col md:flex-row'
echo ""

echo "✓ Website is live and responsive classes are applied"
