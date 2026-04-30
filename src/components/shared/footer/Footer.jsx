import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
<div>
    <aside>
                        <Link href="/" className="text-[30px] mb-3 font-bold tracking-tighter text-blue-600">
                        TILES<span className="text-gray-800"> GALLERY</span>
                    </Link>
    <p className="mb-1.5 mt-1.5 space-y-2">
      <small className="text-[15px]">TILES Industries Ltd.</small>
      <br />
      <small className="text-[15px]">Providing reliable tech since 1992</small>
    </p>
  </aside>
  <form>
    <fieldset className="w-80">
      <label className="text-[16px]">Enter your email address</label>
      <div className="join mt-1">
        <input
          type="text"
          placeholder="Enter your email address"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</div>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  );
};

export default Footer;