import React from "react";
import "../CSS/SizeGuideModal.css";

const SizeGuideModal = ({ product, show, onClose }) => {
  if (!show || !product) return null;

  const isMan = product.gender === "men";
  return (
    <div className="size-guide-backdrop" onClick={onClose}>
      <div className="size-guide-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h3 className="size-guide-title">SIZE GUIDE</h3>

        <div className="size-guide-content">
          <img src={product.images?.[0]} alt="product" className="modal-image" />
          <div className="modal-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Qiymət:</strong> {product.price} AZN</p>
            <p><strong>Rəng:</strong> {product.Colors?.[0]}</p>
            <p><strong>Modelin boyu:</strong> {isMan ? "189 sm" : "172 sm"}, geyindiyi ölçü: {isMan ? "L" : "M"}</p>
          </div>
        </div>

        <hr />

        <div className="measurement-guide">
          <h4>Bədəninizin ölçülməsi necə olmalıdır?</h4>

          {isMan ? (
            <>
              <p><strong>Sinə:</strong> Qollarınızı yanlarınızda durun. Bədənin ön tərəfində, qoltuq altında və sinə və çiyin bıçaqları arasında tam hissəsi üzərindən ölçün</p>
              <p><strong>Qollar:</strong> Qolların başlanğıc nöqtəsindən, çiyin və qol boyunca aşağıdakı bileyə qədər ölçün</p>
              <p><strong>Bel:</strong> Belinizin ən kiçik hissəsindən ölçü alın</p>
            </>
          ) : (
            <>
              <p><strong>Çiyinlər:</strong> Ən enli hissədən ölçü alın</p>
              <p><strong>Büst:</strong> Qolların altından, kürəyin ən geniş və büstün ən dolğun yerindən</p>
              <p><strong>Bel:</strong> Belin ən incə hissəsindən ölçü alın</p>
              <p><strong>Ombalar:</strong> Təbii formada durun, ombanın ən dolğun hissəsindən ölçün</p>
            </>
          )}
        </div>

        <hr />

        <div className="size-tables">
          <h4>Product measurements</h4>
          <p>Ölçü və uyğunluq brendə görə dəyişə bilər. Aşağıdakı ölçülər ümumi bələdçi kimi təqdim olunur.</p>

          <div className="size-table">
            {isMan ? (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Beynəlxalq ölçü</th>
                      <th>DÖŞ</th>
                      <th>QOL</th>
                      <th>BEL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>XS</td><td>81.28-86.36</td><td>78.74-81.28</td><td>66.04-71.12</td></tr>
                    <tr><td>S</td><td>86.36-91.44</td><td>81.28-83.82</td><td>71.66-76.74</td></tr>
                    <tr><td>M</td><td>91.44-96.52</td><td>83.82-86.36</td><td>76.74-81.82</td></tr>
                    <tr><td>L</td><td>96.52-101.6</td><td>86.36-88.9</td><td>81.82-86.9</td></tr>
                    <tr><td>XL</td><td>101.6-106.68</td><td>88.9-91.44</td><td>86.9-91.98</td></tr>
                    <tr><td>XXL</td><td>106.68-111.76</td><td>91.44-93.98</td><td>91.98-101.6</td></tr>
                  </tbody>
                </table>
                <br />
                <h5>Man Clothing - Beynəlxalq Ölçü Uyğunluğu</h5>
                <table>
                  <thead>
                    <tr>
                      <th>UK</th><th>FR</th><th>IT</th><th>SP</th><th>GR</th><th>DÖŞ</th><th>QOL</th><th>BEL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>32</td><td>42</td><td>42</td><td>42</td><td>42</td><td>81.28-86.36</td><td>78.74-81.28</td><td>66.04-71.12</td></tr>
                    <tr><td>34</td><td>44</td><td>44</td><td>44</td><td>44</td><td>86.36-91.44</td><td>81.28-83.82</td><td>71.66-76.74</td></tr>
                    <tr><td>36</td><td>46</td><td>46</td><td>46</td><td>46</td><td>91.44-96.52</td><td>83.82-86.36</td><td>76.74-81.82</td></tr>
                    <tr><td>38</td><td>48</td><td>48</td><td>48</td><td>48</td><td>96.52-101.6</td><td>86.36-88.9</td><td>81.82-86.9</td></tr>
                    <tr><td>40</td><td>50</td><td>50</td><td>50</td><td>50</td><td>101.6-106.68</td><td>88.9-91.44</td><td>86.9-91.98</td></tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Beynəlxalq ölçü</th>
                      <th>ÇİYİNLƏR</th>
                      <th>BÜST</th>
                      <th>BEL</th>
                      <th>OMBA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>XS</td><td>39.25</td><td>76.25</td><td>56</td><td>82.75</td></tr>
                    <tr><td>S</td><td>42</td><td>81.25</td><td>63</td><td>89.25</td></tr>
                    <tr><td>M</td><td>45.75</td><td>91.5</td><td>71.5</td><td>97.25</td></tr>
                    <tr><td>L</td><td>50.75</td><td>97.75</td><td>83.75</td><td>106.75</td></tr>
                    <tr><td>XL</td><td>53.25</td><td>101.5</td><td>87.75</td><td>110.5</td></tr>
                  </tbody>
                </table>
                <br />
                <h5>Woman Clothing - Beynəlxalq Ölçü Uyğunluğu</h5>
                <table>
                  <thead>
                    <tr>
                      <th>UK</th><th>FR</th><th>IT</th><th>SP</th><th>GR</th><th>ÇİYİNLƏR</th><th>BÜST</th><th>BEL</th><th>OMBA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>6</td><td>34</td><td>38</td><td>36</td><td>32</td><td>42</td><td>81.25</td><td>63</td><td>89.25</td></tr>
                    <tr><td>8</td><td>36</td><td>40</td><td>38</td><td>34</td><td>45.75</td><td>91.5</td><td>71.5</td><td>97.25</td></tr>
                    <tr><td>10</td><td>38</td><td>42</td><td>40</td><td>36</td><td>50.75</td><td>97.75</td><td>83.75</td><td>106.75</td></tr>
                    <tr><td>12</td><td>40</td><td>44</td><td>42</td><td>38</td><td>53.25</td><td>101.5</td><td>87.75</td><td>110.5</td></tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;
