// Assume this is the function to check if facet is a facet mapping
function isFacetMapping(facet) {
    // Implement your logic here to determine if facet is a facet mapping
    // For example:
    return typeof facet === 'object' && facet !== null && facet.type === 'facet';
}

// Example usage of the check
const facet = { type: 'facet', value: 'example' };

if (!isFacetMapping(facet)) {
    console.log('The facet is not a valid facet mapping.');
} else {
    console.log('The facet is a valid facet mapping.');
}
