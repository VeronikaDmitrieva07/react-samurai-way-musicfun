import {TracksList} from "./ui/TracksList.tsx";
import {TrackDetail} from "./ui/TrackDetail.tsx";
import {useTrackSelection} from "./bll/UseTrackSelection.tsx";
import styles from "./MainPage.module.css"

export function MainPage() {
    const {trackId, setTrackId} = useTrackSelection()

    const handleTrackSelect = (id: string | null): void => {
        setTrackId(id)
    }

    return (
        <div className={styles.container}>
            <TracksList
                onTrackSelect={handleTrackSelect}
                selectedTrackId={trackId}/>

            <TrackDetail trackId={trackId}/>
        </div>
    )
}
