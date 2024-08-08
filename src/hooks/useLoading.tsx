import { useContext } from 'react';
import { LoadingContext } from '../contexts/Loading/LoadingContext';

export const useLoading = () => useContext(LoadingContext);