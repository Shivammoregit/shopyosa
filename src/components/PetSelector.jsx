import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { petTypes, getBreedsByPetType } from '../data/breeds';
import './PetSelector.css';

export default function PetSelector({
    selectedPetType,
    selectedBreed,
    onPetTypeChange,
    onBreedChange
}) {
    const [isBreedOpen, setIsBreedOpen] = useState(false);
    const breeds = getBreedsByPetType(selectedPetType);

    const handlePetTypeSelect = (petType) => {
        onPetTypeChange(petType);
        onBreedChange(null); // Reset breed when pet type changes
    };

    const handleBreedSelect = (breed) => {
        onBreedChange(breed);
        setIsBreedOpen(false);
    };

    return (
        <section className="pet-selector">
            <div className="container">
                <div className="pet-selector-header">
                    <h1 className="pet-selector-title">
                        Find the <span className="gradient-text">Perfect Products</span>
                        <br />for Your Pet
                    </h1>
                    <p className="pet-selector-subtitle">
                        Select your pet type and breed to discover curated products from Amazon
                    </p>
                </div>

                {/* Pet Type Selection */}
                <div className="pet-type-grid">
                    {petTypes.map((pet) => (
                        <button
                            key={pet.id}
                            className={`pet-type-card ${selectedPetType === pet.id ? 'active' : ''}`}
                            onClick={() => handlePetTypeSelect(pet.id)}
                        >
                            <span className="pet-type-icon">{pet.icon}</span>
                            <span className="pet-type-name">{pet.name}</span>
                            <span className="pet-type-description">{pet.description}</span>
                            {selectedPetType === pet.id && (
                                <span className="pet-type-check">
                                    <Check size={20} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Breed Selection */}
                {selectedPetType && (
                    <div className="breed-selector animate-fadeIn">
                        <label className="breed-label">
                            Select your {selectedPetType === 'dog' ? "dog's" : "cat's"} breed
                        </label>
                        <div className="breed-dropdown-wrapper">
                            <button
                                className={`breed-dropdown-trigger ${isBreedOpen ? 'open' : ''}`}
                                onClick={() => setIsBreedOpen(!isBreedOpen)}
                            >
                                <span className="breed-dropdown-value">
                                    {selectedBreed ? selectedBreed.name : 'Choose a breed...'}
                                </span>
                                <ChevronDown
                                    className={`breed-dropdown-icon ${isBreedOpen ? 'rotated' : ''}`}
                                    size={20}
                                />
                            </button>

                            {isBreedOpen && (
                                <div className="breed-dropdown-menu animate-fadeIn">
                                    <button
                                        className={`breed-option ${!selectedBreed ? 'selected' : ''}`}
                                        onClick={() => handleBreedSelect(null)}
                                    >
                                        All Breeds
                                    </button>
                                    {breeds.map((breed) => (
                                        <button
                                            key={breed.id}
                                            className={`breed-option ${selectedBreed?.id === breed.id ? 'selected' : ''}`}
                                            onClick={() => handleBreedSelect(breed)}
                                        >
                                            {breed.name}
                                            {selectedBreed?.id === breed.id && <Check size={16} />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
