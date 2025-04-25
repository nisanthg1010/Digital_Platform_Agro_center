import React, { useEffect, useState } from 'react';
import ProductInfo from './ProductInfo';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState("Wires");
    const [tableData, setTableData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const uniqueProductTypes = [...new Set(tableData.map(product => product.type))];

    const handleProductClick = (productName) => { 
        setSelectedProduct(productName);
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const fetchProducts = () => {
        const dataRef = ref(db, '/products');
        get(dataRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const dataObject = snapshot.val();
                    const dataKeys = Object.keys(dataObject);
                    const dataEntries = dataKeys.map((key) => ({
                        key,
                        ...dataObject[key],
                    }));
                    dataEntries.sort((a, b) => a.rank - b.rank);
                    setTableData(dataEntries);
                    setFilteredData(dataEntries);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleSearch = (searchQuery, selectedType) => {
        let filteredItems = tableData;

        if (searchQuery) {
            filteredItems = filteredItems.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedType) {
            filteredItems = filteredItems.filter((item) =>
                item.type.toLowerCase() === selectedType.toLowerCase()
            );
        }

        setFilteredData(filteredItems);
    };


    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-auto col-sm-2 bg-white d-flex flex-column justify-content-between min-vh-100">
                    <div className="mt-2">
                        <div className='text-center'>
                            <a className="text-decoration-none d-flex align-items-center text-black d-none d-sm-inline" role="button">
                                <span>Product Categories</span>
                            </a>
                            <hr className='mx-auto d-none d-sm-block'></hr>
                        </div>

                        <ul className="nav nav-pills flex-column" id="parentM">
                            <li className="nav-item my-1">
                                <a href="#submenu1" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>Bayer</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>

                                <ul className="nav collapse ms-2 flex-column" id="submenu1" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Wires")}>Roundup</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Pipes")}>Fenosquick</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Antracol</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Planofix</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Ambition</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Laudis</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Foost</button>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-1">
                                <a href="#submenu3" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>Indofil</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu3" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("BoschDrill")}>M-45</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Heatgun")}>Oxygold</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Heatgun")}>Rimon</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Volax</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Token</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Alecto</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Sprint</button>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-1">
                                <a href="#submenu3" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>Tata</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu3" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("BoschDrill")}>Takumi</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Heatgun")}>Contaf</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Heatgun")}>Antrataf</button>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-1">
                                <a href="#submenu2" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>IIL</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu2" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>2,4-D,strike</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Torry</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Mission</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Racer</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Racer plus</button>
                                    </li>
                                </ul>
                            </li><li className="nav-item my-1">
                                <a href="#submenu2" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>Nagarjuna</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu2" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>Senior</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Huericane plus</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>profex</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>profex super</button>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item my-1">
                                <a href="#submenu3" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>Linga Chemicals</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu3" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("BoschDrill")}>Ultra gold</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Heatgun")}>Ultra zinc</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Heatgun")}>Humind G</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Bioenzyme</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Ultra-B</button>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item my-1">
                                <a href="#submenu4" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>SPIC</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu4" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Belts")}>Urea</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>DAP</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>20:20:0:13</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Zinc Sulphate</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>SSP</button>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item my-1">
                                <a href="#submenu5" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>MCF</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu5" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Chains")}>Urea</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>20:20:0:13</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>Neem cake</button>
                                    </li>
                                    <li className="nav-item mt-2">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Fittings")}>General Mix</button>
                                    </li>
                    
                                </ul>
                            </li>
                            <li className="nav-item my-1">
                                <a href="#submenu2" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>SKM</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu2" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>50 kg super pellet</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>20 kg super pellet</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>50 kg Biopass</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>20 kg Biopass</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>60 kg cotton cake</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>30 kg cotton cake</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>40 kg cotton powder</button>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-1">
                                <a href="#submenu2" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>Krishi</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu2" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>Nattakozhi prestater</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>Nattakozhi stater</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Drill")}>Nattakozhi Finisher</button>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item my-1">
                                <a href="#submenu6" className="nav-link text-black d-flex justify-content-between align-items-center" data-bs-toggle="collapse" aria-current="page">
                                    <span className='d-none d-sm-inline'>IFFCO</span>
                                    <i className='bi bi-arrow-down-short'></i>
                                </a>
                                <ul className="nav collapse ms-2 flex-column dropup" id="submenu6" data-bs-parent="#parentM">
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Bearing")}>Urea</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Bearing")}>DAP</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Bearing")}>15:15:15</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Bearing")}>16:16:16</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Bearing")}>20:20:20:13</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-black btn" onClick={() => handleProductClick("Bearing")}>10:26:26</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </div>

                <main role="main" className="col-md-10 px-md-4 col-sm-10 col-9">

                    {/* <div className="container text-center py-2">
                        <div className="container mt-4 mb-2">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='input-group'>
                                        <input
                                            type="text"
                                            placeholder="Search product name..."
                                            className='form-control'
                                            value={searchText}
                                            onChange={(e) => {
                                                setSearchText(e.target.value);
                                                handleSearch(e.target.value, selectedType);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6 m-lg-0 my-3'>
                                    <select
                                        value={selectedType}
                                        onChange={(e) => {
                                            setSelectedType(e.target.value);
                                            handleSearch(searchText, e.target.value);
                                        }}
                                        className='form-select'
                                    >
                                        <option value="">All Types</option>
                                        {uniqueProductTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <h3 className='pt-5'>Our Featured Products</h3>
                        <hr className="mx-auto" />
                        <p>Here you can check our new products with fair prices</p>
                    </div> */}

                    {/* Render Products based on selectedProduct or filteredData */}
                    {selectedProduct ? (
                        <ProductInfo productType={selectedProduct} />
                    ) : (
                        filteredData.map(product => (
                            <ProductInfo key={product.key} productType={product.type} />
                        ))
                    )}

                </main>

            </div>
        </div>
    );
};

export default Products;
