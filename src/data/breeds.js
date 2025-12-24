export const petTypes = [
    {
        id: 'dog',
        name: 'Dog',
        icon: '🐕',
        description: 'Find the best products for your canine companion'
    },
    {
        id: 'cat',
        name: 'Cat',
        icon: '🐱',
        description: 'Discover premium products for your feline friend'
    }
];

export const breeds = {
    dog: [
        { id: 'labrador', name: 'Labrador Retriever', size: 'large' },
        { id: 'german-shepherd', name: 'German Shepherd', size: 'large' },
        { id: 'golden-retriever', name: 'Golden Retriever', size: 'large' },
        { id: 'french-bulldog', name: 'French Bulldog', size: 'small' },
        { id: 'bulldog', name: 'Bulldog', size: 'medium' },
        { id: 'poodle', name: 'Poodle', size: 'medium' },
        { id: 'beagle', name: 'Beagle', size: 'medium' },
        { id: 'rottweiler', name: 'Rottweiler', size: 'large' },
        { id: 'german-pointer', name: 'German Shorthaired Pointer', size: 'large' },
        { id: 'dachshund', name: 'Dachshund', size: 'small' },
        { id: 'pembroke-corgi', name: 'Pembroke Welsh Corgi', size: 'small' },
        { id: 'australian-shepherd', name: 'Australian Shepherd', size: 'medium' },
        { id: 'yorkshire-terrier', name: 'Yorkshire Terrier', size: 'small' },
        { id: 'boxer', name: 'Boxer', size: 'large' },
        { id: 'cavalier-spaniel', name: 'Cavalier King Charles Spaniel', size: 'small' },
        { id: 'doberman', name: 'Doberman Pinscher', size: 'large' },
        { id: 'great-dane', name: 'Great Dane', size: 'large' },
        { id: 'shih-tzu', name: 'Shih Tzu', size: 'small' },
        { id: 'siberian-husky', name: 'Siberian Husky', size: 'large' },
        { id: 'bernese-mountain', name: 'Bernese Mountain Dog', size: 'large' },
        { id: 'pomeranian', name: 'Pomeranian', size: 'small' },
        { id: 'boston-terrier', name: 'Boston Terrier', size: 'small' },
        { id: 'havanese', name: 'Havanese', size: 'small' },
        { id: 'shetland-sheepdog', name: 'Shetland Sheepdog', size: 'small' },
        { id: 'brittany', name: 'Brittany', size: 'medium' }
    ],
    cat: [
        { id: 'persian', name: 'Persian', coat: 'long' },
        { id: 'maine-coon', name: 'Maine Coon', coat: 'long' },
        { id: 'ragdoll', name: 'Ragdoll', coat: 'long' },
        { id: 'british-shorthair', name: 'British Shorthair', coat: 'short' },
        { id: 'siamese', name: 'Siamese', coat: 'short' },
        { id: 'abyssinian', name: 'Abyssinian', coat: 'short' },
        { id: 'bengal', name: 'Bengal', coat: 'short' },
        { id: 'birman', name: 'Birman', coat: 'long' },
        { id: 'oriental-shorthair', name: 'Oriental Shorthair', coat: 'short' },
        { id: 'sphynx', name: 'Sphynx', coat: 'hairless' },
        { id: 'devon-rex', name: 'Devon Rex', coat: 'short' },
        { id: 'himalayan', name: 'Himalayan', coat: 'long' },
        { id: 'scottish-fold', name: 'Scottish Fold', coat: 'short' },
        { id: 'russian-blue', name: 'Russian Blue', coat: 'short' },
        { id: 'norwegian-forest', name: 'Norwegian Forest Cat', coat: 'long' }
    ]
};

export const getBreedsByPetType = (petType) => {
    return breeds[petType] || [];
};
