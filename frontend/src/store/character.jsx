import {create} from "zustand";

export const useCharacterStore = create((set) => ({
    character: [],
    setCharacter: (character) => set({character}),
    // In character.jsx
createCharacter: async(newCharacter) => {
    if(!newCharacter.name || !newCharacter.power || !newCharacter.image) {
        return {success:false, message: "Please fill in all fields"};
    }
      const res =await fetch("/api/aot", {  // CORRECT ENDPOINT IS HERE
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(newCharacter),
      })
     const data = await res.json();
      set((state) => ({character: [...state.character, data.data]}));
      return {success: true, message: "Character created successfully"};
  }
}));
