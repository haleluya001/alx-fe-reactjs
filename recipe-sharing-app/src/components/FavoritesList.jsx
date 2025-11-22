import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => recipes.find((r) => r.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
