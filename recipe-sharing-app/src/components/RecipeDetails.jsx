import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const [isEditing, setIsEditing] = useState(false);

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
          <button
            onClick={() =>
              isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
            }
            style={{ marginLeft: '10px' }}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
