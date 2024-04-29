import React, { useEffect } from 'react';
import Spinner from './components/Spinner/Spinner';
import useAxios from './hooks/useAxios';
import Photo from './Photo';


function Gallery() {

    const [setUrl, data, loading, setLoading, error] = useAxios();

    useEffect(() => {
        const apiKey = process.env.REACT_APP_NASA_API_KEY;

        const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

        setUrl(apiUrl);
        setLoading(true);
    }, []);

    return (
        <div className="col-12">
            <h2>Gallery</h2>
            <p>These are the last known images the Rover had taken before going offline.</p>
            <div className="row">
                { !loading && data ? data.photos.map((photo) => <Photo key={photo.id} photo={photo} /> ) : <Spinner />}
            </div>
        </div>

    );
}

export default Gallery;