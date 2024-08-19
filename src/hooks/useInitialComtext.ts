import { useContext } from 'react';
import { InitialContext } from '../providers/InitialProvider';

export const useInitialContext = () => useContext(InitialContext);
