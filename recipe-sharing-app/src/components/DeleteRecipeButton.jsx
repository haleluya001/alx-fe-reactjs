import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // <-- add this

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // <-- redirect to home after deletion
    }
  };

  return <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>;
};

export default DeleteRecipeButton;
