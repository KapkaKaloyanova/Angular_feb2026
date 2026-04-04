import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ThemesState } from "../../../shared/interfaces/themes_state";
import { Theme } from "../../../shared/interfaces/theme";


export const selectThemesState = createFeatureSelector<ThemesState>('themes');

export const selectAllThemes =createSelector(
    selectThemesState,
    (state:ThemesState) => state.themes
);

export const selectIsLoading = createSelector(
    selectThemesState,
    (state:ThemesState) => state.isLoading
);

export const selectThemesError = createSelector(
    selectThemesState,
    (state:ThemesState) => state.error
);

export const selectThemesSortedBySubscribers = createSelector(
    selectAllThemes,
    (themes:Theme[]) => [...themes].sort((a,b) => b.subscribers.length - a.subscribers.length)
);