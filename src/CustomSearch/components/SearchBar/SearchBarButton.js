import React from "react";

const SearchBarButton = () => {
    
    const handleSearch = () => {
        alert('clicked')
    }

    return (
        <div>
            <button onClick={handleSearch}>
                Click me baby
            </button>
        </div>
    )
}

export default SearchBarButton