import * as React from 'react';

import { SelectName } from './select_name';
import { ValidationTextFields } from './text_input';

export const Main = () => {
    return (
        <div>
            <SelectName />

            <ValidationTextFields />
        </div>
    );
}
