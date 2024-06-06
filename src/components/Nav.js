import React from 'react';
import Formulaire from '../pages/Formulaire'

function Nav() {
    return(
        <nav>
            <BrowserRouter>
                <Routes>
                <Route path="Formulaire" element={<Formulaire />} />
                </Routes>
            </BrowserRouter>
        </nav>
    );
}
export default Nav;