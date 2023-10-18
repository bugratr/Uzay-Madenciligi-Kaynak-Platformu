// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UzayMadencilik {
    struct Maden {
        string ad;
        string koordinat;
        string madde;
        address sahip;
        uint256 kesfedilmeTarihi;
    }

    Maden[] public madenler;

    function madenEkle(string memory _ad, string memory _koordinat, string memory _madde) public {
        Maden memory yeniMaden = Maden({
            ad: _ad,
            koordinat: _koordinat,
            madde: _madde,
            sahip: msg.sender,
            kesfedilmeTarihi: block.timestamp
        });

        madenler.push(yeniMaden);
    }

    function madenSayisi() public view returns (uint256) {
        return madenler.length;
    }
}
