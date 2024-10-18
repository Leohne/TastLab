import { NavigateFunction } from 'react-router-dom';

export const navigateToSearch = (navigate: NavigateFunction, searchTerm: string) => {
    navigate(`/recherche?terms=${encodeURIComponent(searchTerm)}`);
    console.log(searchTerm);
};