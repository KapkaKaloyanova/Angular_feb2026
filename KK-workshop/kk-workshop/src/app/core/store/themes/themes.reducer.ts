import { createReducer, on } from "@ngrx/store";
import { initialThemeState } from "./themes.state";
import { ThemesState } from "../../../shared/interfaces/themes_state";
import { loadThemes, loadThemesFailure, loadThemesSuccess } from "./themes.actions";

export const themesReducer = createReducer(
    initialThemeState,

    on (loadThemes, (state):ThemesState => ({
        ...state,
        isLoading: true
    })),

    on(loadThemesSuccess, (state:ThemesState, { themes }):ThemesState => ({
        ...state,
        themes,
        isLoading: false,
        error: null
    })),

    on (loadThemesFailure, (state:ThemesState, { error }): ThemesState => ({
        ...state,
        isLoading: false,
        error
    }))

)