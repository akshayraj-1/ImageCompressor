import _404 from "../assets/images/_404.svg";
import Button from "../components/Button.jsx";

function Error() {
    return (
        <section className="flex flex-col gap-2 justify-center items-center size-full min-h-screen px-5 sm:px-8">
            <object data={_404} className="h-[52vh] w-full"/>
            <p className="text-xl sm:text-3xl font-bold mt-4">Page Not Found</p>
            <span className="text-textSecondary text-sm sm:text-base text-center mx-6">Oops! The page you are looking for does not exist</span>
            <Button
                type="link"
                to="/"
                className="mt-8 px-8 rounded-full"
                variant="primary"
                label="Take me home"/>
        </section>
    );
}

export default Error;