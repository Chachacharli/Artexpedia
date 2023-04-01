import {   TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon,} from "next-share"

export const DailyArtworkButtons = () => {
    return(
        <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
        <p>Share in: </p>
            <div className="w-100  gap-3  d-flex justify-content-center align-items-center ">
                    <TwitterShareButton
                        url={'https://artexpedia.vercel.app/daily-artwork'}
                        title={'I loved this artwork!!.'}
                        >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <FacebookShareButton
                            url={'https://artexpedia.vercel.app/daily-artwork'}
                            quote={'I loved this artwork!!.'}
                            >
                            <FacebookIcon size={32} round />
                    </FacebookShareButton>
            </div>
        </div>
    )
}