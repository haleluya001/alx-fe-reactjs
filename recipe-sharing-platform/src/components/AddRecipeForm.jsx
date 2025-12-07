import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !steps) {
      setErrors("Please fill in all fields.");
      return;
    }

    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      setErrors("Please enter at least two ingredients (each on a new line).");
      return;
    }

    setErrors("");

    // Build recipe object (ready to save in backend later)
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps: steps.split("\n")
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Reset Form
    setTitle("");
    setIngredients("");
    setSteps("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>

      {errors && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
          {errors}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block text-lg font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            rows="5"
            placeholder="Example:\n2 cups flour\n1 tsp sugar"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
        </div>

        {/* Steps */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            rows="6"
            placeholder="Example:\nMix all ingredients.\nBake for 20 minutes."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
