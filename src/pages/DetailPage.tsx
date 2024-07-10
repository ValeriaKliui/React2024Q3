import { Planet } from '@constants/interfaces';
import { useFetchAndSet } from '@hooks/useFetchAndSet';
import { fetchPlanets } from '@utils/fetchPlanets';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const DetailPage = () => {
    const [params] = useSearchParams();
    const [planets, setPlanets] = useState<Planet[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const planetName = params.get('detail');
    const planet = planets?.[0];

    const {
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water,
        population,
        residents,
        films,
        created,
        edited,
        url,
    } = planet ?? {};


    const loadDetails = useFetchAndSet({
        setIsLoading,
        setItems: setPlanets,
        fetchFunc: fetchPlanets,
    });

    //FIX RACE CONDITIONS!!!!!!!!!!!!!!!!!

    useEffect(() => {
        let isCanceled = false
        if (!isCanceled) loadDetails({ searchValue: planetName });
        return () => { isCanceled = true }
    }, [planetName, loadDetails]);

    return (
        <> {
            isLoading ? <div>loading</div> : <div>
                {name} {diameter}
                {rotation_period}
                {orbital_period},{diameter},{climate},{gravity},{terrain},
                {surface_water},{population},{residents},{films},{created},
                {edited},{url},
            </div>
        }</>

    );
};
