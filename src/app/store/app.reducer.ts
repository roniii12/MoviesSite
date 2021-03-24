import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromAuth from '../auth/store/auth.reducer'

export interface AppState {
  auth: fromAuth.State;
}

