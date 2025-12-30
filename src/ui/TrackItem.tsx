import type {TrackListItemOutput} from "../dal/api.ts";
import styles from "./TracksList.module.css"
import clsx from "clsx";

type Props = {
    onClickSelect: (trackId: string) => void
    isSelected: boolean
    track: TrackListItemOutput
}

export function TrackItem({onClickSelect, track, isSelected}: Props) {
    const handleClick = () => onClickSelect?.(track.id)

    // const className = styles.track + ' ' + (isSelected ? styles.selected : '')
    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    })

    return (
        <li className={className}>
            <div onClick={handleClick}>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
        </li>)
}